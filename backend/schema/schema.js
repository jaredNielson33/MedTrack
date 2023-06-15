// Sample data
const { medications, users } = require("../sampleData.js");

// Mongoose Models
const Medication = require("../models/Medication.js");
const User = require("../models/User.js");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const MedicationType = new GraphQLObjectType({
  name: "Medication",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    directions: { type: GraphQLString },
    count: { type: GraphQLInt },
    type: { type: GraphQLString },
    urgency: { type: GraphQLString },
    expiration: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return users.findById(parent.userId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (parentValue, args) => {
        return User.findById(args.id);
        // return users.find((user) => user.id === args.id);
      },
    },
    medications: {
      type: new GraphQLList(MedicationType),
      resolve: (parent, args) => {
        return medications;
      },
    },
    medication: {
      type: MedicationType,
      args: { id: { type: GraphQLID } },
      resolve: (parentValue, args) => {
        return medications.find((medication) => medication.id === args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parentValue, args) => {
        const user = new User({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return user.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

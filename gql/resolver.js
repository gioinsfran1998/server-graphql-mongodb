const resolvers = {
  Query: {
    // User
    getUser: ()=>{
      console.log('obteniendo usuario');
      return null;

    }
  },
  Mutation:{
    //User
    register: (_, {input}) => {
      console.log('Registrando user');
      console.log(input)
      return input;
    }
  }
}

module.exports = resolvers;
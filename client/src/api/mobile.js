import { GraphQLClient, gql } from 'graphql-request';


const MOBILE_API_URL = process.env.REACT_APP_MOBILE_API_URL;
const client = new GraphQLClient(MOBILE_API_URL);

export const getRestaurants = async (userToken) => {

  try {

    const requestHeaders = {
      authorization: ` Bearer ${userToken} `
    }

    const query = gql`
        {
          restaurants(
            delivery: false
            index: 1
            limit: 100
          ) {
            name
            open
            types {
              name
            }
          
          }
        }
        
          `
    const data = await client.request(query, null, requestHeaders)

    return data;

  } catch (err) {
    console.log(err);
  }
}

export const getPastOrders = async (userToken) => {

  try {

    const requestHeaders = {
      authorization: ` Bearer ${userToken} `
    }

    const query = gql`
      {
        pastOrders(limit: 100, index: 1) {
          address {
            addressLine1
          }
          orderDate
          restaurant {
            name
          }
          total
      
        }
      }
        `

    const data = await client.request(query, null, requestHeaders)

    return data;

  } catch (err) {
    console.log(err);
  }
}


export const getUserInfo = async (userToken) => {

  try {


    const requestHeaders = {
      authorization: ` Bearer ${userToken} `
    }

    const query = gql`
    {
      user {
        addresses {
          addressIconId
          addressLine1
          addressLine2
          adminWard
    
          default
          flatNumber
          fullName
          geoEnabled
          id
          lat
          lon
          postalCode
          slugAdminWard
          tips
          title
        }
        createdAt
        email
        emailVerified
        firstName
        lastName
        mobileNumber
        smsVerified
      }
    }
    
        `

    const data = await client.request(query, null, requestHeaders)



    return data;

  } catch (err) {
    console.log(err);
  }



}
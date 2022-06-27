import jwt from "jsonwebtoken";
import axios from 'axios';
import { request, gql } from 'graphql-request';



export const signin = async (req, res) => {

    const mobileAPI = process.env.MOBILE_API_URL;
    const secret = process.env.JWT_SECRET;

    const { email, password } = req.body;

    try {

        const mutation = gql`mutation loginWithEmail ($email: String!, $password: String!) {
            loginWithEmail(email: $email, password: $password) {
              token
            }
          }`

        const variables = {
            email,
            password
        }

        const data = await request("https://simplicityhw.cotunnel.com/graphql", mutation, variables);

        const token = data.loginWithEmail.token;

        res.status(200).json({ email, token  });

    } catch (err) {
        res.status(500).json({ message: "Email or password is wrong" });
    }
};


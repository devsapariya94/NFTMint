import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnectd = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setAccounts(accounts);
            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <Flex justify="space-between" align = 'center' padding='30px'>
          <Flex justify="space-around" width= "40%" padding = "0 75px"> 
          <Link href="https://facebook.com">
            <Image src={Facebook} alt="facebook" boxSize="42px" margin = "0 15px" />
          </Link>
          </Flex>
          <Flex justify="space-around" width= "40%" padding = "0 75px"> 
          <Link href="https://facebook.com">
            <Image src={Twitter} alt="facebook" boxSize="42px" margin = "0 15px" />
          </Link>
          </Flex>
          <Flex justify="space-around" width= "40%" padding = "0 75px"> 
          <Link href="https://facebook.com">
            <Image src={Email} alt="facebook" boxSize="42px" margin = "0 15px" />
          </Link>
          </Flex>


             <Flex justify="space-around" align = 'center' width='30%' padding='30px'>
                
                <Box margin="0 15px">
                    About
                </Box>
                
                </Flex>

                <Spacer />
                <Flex justify="space-around" align = 'center' width='30%' padding='30px'>
                
                <Box margin="0 15px">
                    Mint
                </Box>
                
                </Flex>

                <Spacer />
                <Flex justify="space-around" align = 'center' width='30%' padding='30px'>
                
                <Box margin="0 15px">
                    Team
                </Box>
                
                </Flex>

                <Spacer />


            {isConnectd ? (
                <p>Connected</p>
            ): 
            (
                <button onClick={connectAccount}>Connect</button>
            )}
        </Flex>


    );

}

export default NavBar;
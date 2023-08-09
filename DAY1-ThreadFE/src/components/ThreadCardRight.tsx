// import { useState } from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

interface ThreadCardProps {
  id?: number;
  author_picture?: string;
  author_fullname?: string;
  author_username?: string;
  posted_at?: string;
  content?: string;
  image?: string;
  likes_count?: number;
  replies_count?: number;
  is_liked?: boolean;
}

const ThreadCardRight = (props: ThreadCardProps) => {
  return (
    <>
      <Box border="2px solid white" marginTop="10%" marginRight="10%">
        <Box display={"flex"}>
          <Text
            color={"white"}
            fontWeight="bold"
            marginTop="5%"
            marginLeft="5%"
          >
            Profil
          </Text>
        </Box>
        <Box mb="25px">
          <Image
            src="https://www.desktopbackground.org/download/o/2014/03/26/737495_naruto-logo-ii-by-chief117john-jpg_1600x1280_h.jpg"
            width={"350px"}
            height={"120px"}
            alt="Thread"
            borderRadius="10px"
            mb="10px"
            ml="5%"
            mt="2%"
          />

          <Box mt="10px" ml="5%">
            <Image
              src="https://i.imgur.com/ynQwZNxh.jpg"
              alt="Author"
              width={"50px"}
              height={"50px"}
              borderRadius="50%"
              objectFit="cover"
              mr="8px"
              mt="-10"
              ml="5%"
            />
            <Box display="flex" gap="40%">
              <Box>
                <Text color="white" mt="4%" gap="10%" fontSize="15">
                  HELEN CINDERA
                </Text>
              </Box>
              <Button border="2px solid white"
                bgColor="#04a51e" 
                color="white" 
                mt="4%"
                width="80px"
                height="30px"
                marginTop="1%"
                
                borderRadius="20%"
                >Edit Profil
              </Button>
            </Box>

            <Text color={"grey"}>({props.posted_at})</Text>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" w="70%">
          <Button display={"grid"}>Likes</Button>
          <Button>Replies</Button>
        </Box>
      </Box>
    </>
  );
};

export default ThreadCardRight;

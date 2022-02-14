import type {NextPage} from 'next'
import {Button, Container, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import {useState} from "react";
import axios from 'axios';

const Home: NextPage = () => {
    const [newPostDialog, setNewPostDialog] = useState(false);



    return (
        <div>
            <NewPostModal isOpen={newPostDialog} onClose={() => setNewPostDialog(false)}/>
            <Container maxW='container.sm'>
                <HStack my={10}>
                    <Text fontSize="5xl" fontWeight={800}>
                        Posts
                    </Text>
                    <Spacer/>
                    <Button onClick={() => setNewPostDialog(true)}>
                        New
                    </Button>
                </HStack>
                <VStack width="100%">
                    <Post title="cool post" body="eva lau is weird.... cancel it" postedAt={new Date()}/>
                    <Post title="cool post" body="eva lau is weird.... cancel it" postedAt={new Date()}/>
                    <Post title="cool post" body="eva lau is weird.... cancel it" postedAt={new Date()}/>
                    <Post title="cool post" body="eva lau is weird.... cancel it" postedAt={new Date()}/>
                    <Post title="cool post" body="eva lau is weird.... cancel it" postedAt={new Date()}/>
                    <Post title="cool post" body="eva lau is weird.... cancel it" postedAt={new Date()}/>
                    <Post title="cool post" body="eva lau is weird.... cancel it" postedAt={new Date()}/>
                </VStack>
            </Container>
        </div>
    );
}

export default Home

import {FC} from "react";
import {Box, Divider, Text, VStack} from "@chakra-ui/react";
import Comment from "./Comment";

interface Props {
    title: string;
    body: string;
    postedAt: Date;
}

const Post: FC<Props> = ({title, body, postedAt}) => {
    return <Box width="100%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box p={4}>
            <Text fontSize='xl' fontWeight={600}>{title}</Text>
            <Text fontSize='sm'>
                {body}
            </Text>
        </Box>
        <Divider/>
        <Box p={4}>
            <Text fontSize='md' fontWeight={600}>Comments</Text>
            <VStack>
                <Comment content="i agree!" postedAt={new Date()}/>
                <Comment content="woo!" postedAt={new Date()}/>
                <Comment content="he sucks ds on the d" postedAt={new Date()}/>
            </VStack>
        </Box>
    </Box>
}

export default Post;
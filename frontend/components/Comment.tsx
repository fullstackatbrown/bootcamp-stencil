import {FC} from "react";
import {Box, Divider, Text} from "@chakra-ui/react";

interface Props {
    content: string;
    postedAt: Date;
}

const Comment: FC<Props> = ({content, postedAt}) => {
    return <Box width="100%">
        <Box my={3}>
            <Text fontSize='sm'>
                {content}
            </Text>
            <Text fontSize='xs' fontWeight={600}>
                {postedAt.toString()}
            </Text>
        </Box>
        <Divider/>
    </Box>;
}

export default Comment;
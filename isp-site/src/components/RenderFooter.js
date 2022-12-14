// Modules
import { View, Link, Text, IconHeartLine } from '@instructure/ui'


// Component
export default function RenderFooter() { return(
    <View
        id="footer"
        as="div"
        textAlign="center"
        padding="small"
        position="absolute"
        insetBlockEnd="0"
        margin="0 auto"
        width="100%"
        borderWidth="small none none"
    >
    <Text
        transform="uppercase"
        letterSpacing="expanded"
    >
        Made with <IconHeartLine color="error" title="Love" /> by <Link href="https://www.instructure.com">Instructure</Link>
    </Text>
</View>
)}
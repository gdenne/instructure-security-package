// Modules
import { View, Text, Heading } from '@instructure/ui'

// Components

// URLs
const url_prefix = "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/"
const url_postfix = ".zip"
const impact_url = `${url_prefix}impact${url_postfix}`


// Page
export default function Impact() { return (
<View as="div">
    <Heading>Impact</Heading>
  <Text>The Impact security package is under construction.</Text>
</View>
)}
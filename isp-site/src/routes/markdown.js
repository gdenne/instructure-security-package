// Modules
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { View, Link, Text, List } from '@instructure/ui'

// Page
function Markdown(props) {
  let md = props.readme

  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(md)
      .then((response) => {
        if (response.ok) return response.text()
        else return Promise.reject("Didn't fetch text correctly")
      })
      .then((text) => {
        setContent(text);
      })
      .catch((error) => console.error(error));
  })
  
  return (
    <View as="div">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          a:    ({node, ...props}) => <Link to={node.href} {...props} />,
          p:    ({node, ...props}) => <Text {...props} />,
          div:  ({node, ...props}) => <View as="div" {...props} />,
          li:   ({node, ...props}) => <List.Item {...props} />
        }}
      />
    </View>
  )
}

export default Markdown

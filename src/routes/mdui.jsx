// Modules
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import strings from "../strings/mdui";
import { getLang, getStrings } from "../utils/langs";
import RenderFooter from "../components/RenderFooter";
import { Grid, SourceCodeEditor, View } from "@instructure/ui";

// Components
import RenderTopNavBar from "../components/RenderTopNavBar";
import mdtoui from "../components/mdtoui";
import allowedElements from "../variables/allowedElements";
import markdownSample from "../variables/markdownSample.md?raw";

// Page
export default function MDUI() {
  const l = getLang(useParams().language);
  const s = getStrings(strings, l);
  const md = markdownSample;

  useEffect(() => {
    document.title = "Markdown to Instructure UI";
  });

  const [content, setContent] = useState(`${s.loading}`);

  useEffect(() => {
    setContent(md);
  }, [md]);

  return (
    <>
      <RenderTopNavBar language={l} />
      <View
        id="main"
        className="mdui"
        as="div"
        padding="medium medium xx-large"
        minWidth="20rem"
        maxWidth="100vw"
        margin="0 auto"
      >
        <Grid startAt="large">
          <Grid.Row>
            <Grid.Col>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkGemoji]}
                rehypePlugins={[rehypeRaw]}
                allowedElements={allowedElements}
                components={mdtoui}
              >
                {content}
              </ReactMarkdown>
            </Grid.Col>
            <Grid.Col>
              <SourceCodeEditor
                label={`${s.markdown_source}`}
                language="markdown"
                readOnly={false}
                editable={true}
                lineNumbers={true}
                foldGutter={true}
                highlightActiveLineGutter={true}
                highlightActiveLine={true}
                lineWrapping={true}
                value={content}
                onChange={(value) => {
                  setContent(value);
                }}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </View>
      <RenderFooter language={l} />
    </>
  );
}
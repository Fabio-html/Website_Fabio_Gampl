
// Optional: Wenn du globales CSS hast
const GlobalStyle = createGlobalStyle`
  @import url('/style.css'); 
`;

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <div>
      <GlobalStyle />
      <BlogPostTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
      />
    </div>
  );
};

export default BlogPostPreview;

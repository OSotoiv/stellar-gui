
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ children }) => {
    return (
        <SyntaxHighlighter
            style={materialDark}
        >
            {children}
        </SyntaxHighlighter>
    );
}
export default CodeBlock;
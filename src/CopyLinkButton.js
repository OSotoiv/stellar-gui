import React, { useRef } from 'react';
import { Button } from 'reactstrap';

const CopyLinkButton = ({ linkToCopy }) => {
    const textAreaRef = useRef(null);

    const copyToClipboard = () => {
        // Create a temporary text area element
        const textArea = document.createElement('textarea');
        textArea.value = linkToCopy;
        document.body.appendChild(textArea);

        // Select and copy the text
        textArea.select();
        document.execCommand('copy');

        // Remove the temporary text area
        document.body.removeChild(textArea);

        // Optionally, provide feedback to the user
    };

    return <>
        <Button className='btn-sm' onClick={copyToClipboard}>copy</Button>
        <textarea
            ref={textAreaRef}
            value={linkToCopy}
            style={{ position: 'absolute', left: '-9999px' }}
            readOnly
        />
    </>
};

export default CopyLinkButton;

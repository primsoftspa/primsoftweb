import ReactMarkdown from 'react-markdown';

type Props = {
  markdownText: string;
}

export default ({markdownText}: Props) => {
  return (
    <div>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  )
}
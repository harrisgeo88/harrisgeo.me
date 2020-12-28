const fs = require('fs')

const path = process.argv[2]

if (!path) {
  console.error('Please provide a path')
}
else if (!path.endsWith('.md')) {
  console.error('Please provide a markdown file')
} else {
  const markdown = fs.readFileSync(path, 'utf8')
  
  const newMarkdown = markdown.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target=”_blank” rel="noopener noreferrer">$1</a>');
  fs.writeFileSync(path, newMarkdown)
}

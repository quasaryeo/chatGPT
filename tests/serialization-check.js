const sample = {
  body: {
    properties: {
      Name: {
        title: [{ text: { content: 'Task "A"\nNext line' } }],
      },
      Notes: {
        rich_text: [
          { text: { content: 'Special chars: \\ " \' , and emoji 🎉' } },
        ],
      },
      Tags: {
        multi_select: [
          { name: 'alpha,beta' },
          { name: 'γδ' },
        ],
      },
    },
  },
};

function safeSerialize(obj) {
  return JSON.stringify(obj);
}

const serialized = safeSerialize(sample);
const parsed = JSON.parse(serialized);

if (JSON.stringify(parsed) === JSON.stringify(sample)) {
  console.log('Serialization OK');
} else {
  console.error('Mismatch after serialization');
  process.exit(1);
}

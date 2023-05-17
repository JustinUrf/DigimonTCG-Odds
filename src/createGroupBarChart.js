export default function createGroupBarChart(x, y, name, type) {
  const newGraph = 
    {
      x:x, 
      y:y,
      name: name,
      type: type
    }
  return newGraph
}
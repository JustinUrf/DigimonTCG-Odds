export default function createTitle(title) {
    let layout = {
    title: {
      text: title,
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
      },
    }

    return layout
  }
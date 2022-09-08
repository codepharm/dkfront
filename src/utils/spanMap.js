const spanMap = (html) => {
  return html.map((e, index) => <span key={index}>{e}</span>)
}

export default spanMap;

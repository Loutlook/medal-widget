const widget = {};

widget.initialize = (elementId, sort="gold") => {
  const iframe = document.createElement('iframe');
  // TODO: need to have some polyfill for IE
  elementId = typeof(elementId) === "string" && elementId.substring(1);
  document.getElementById(elementId).appendChild(iframe);
  iframe.src = "./index.html?sort=" + sort;
  iframe.style = "border:0;width:350px;height:400px"
}
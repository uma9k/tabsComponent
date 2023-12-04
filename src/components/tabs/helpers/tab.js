const tabs = [
  {
    title: "tab 1",
    contents: <p>this is tab 1</p>,
  },
  {
    title: "tab 2",
    contents: <p>this is tab 2</p>,
  },
  {
    title: "tab 3",
    contents: <p>this is tab 3</p>,
  },
];

const getStructuredTabs = (tabs) =>{
    const data = {}
    tabs.forEach(tab=>{
        data[tab.title] = tab.contents
    })
    return data;
}

export {tabs, getStructuredTabs}

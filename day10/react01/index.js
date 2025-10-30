{/* <div id="outer">
    <div id="inner1">
        <div id="span-container">
            <span>
                span1;
            </span>
            <span>
                span2;
            </span>
        </div>
    </div>
// </div> */}
// React.createElement("div", { id: "outer" },
//     React.createElement("div", { id: "inner1" },
//         React.createElement("div", { id: "span-container" },
//             [React.createElement("span", {}, "span1"),
//             React.createElement("span",{},"span2"),
//             ]
//         )
//     )
// )
const reactElement = <div id="outer">
    <div id="inner1">
        <div id="span-container">
            <span>span1</span>
            <span>span2</span>
        </div>
    </div>
    <div id="inner2">
        <div id="span-container">
            <span>span3</span>
            <span>span4</span>
        </div>
    </div>
    <div id="inner3">
        <div id="span-container">
            <span>span5</span>
            <span>span6</span>
        </div>
    </div>
</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);
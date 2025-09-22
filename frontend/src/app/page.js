'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
function Home() {
    const [data, setData] = (0, react_1.useState)({ message: '', time: '' });
    (0, react_1.useEffect)(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error('Fetch error:', err));
    }, []);
    return ((0, jsx_runtime_1.jsxs)("main", { className: "flex min-h-screen flex-col items-center justify-center p-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold", children: data.message || 'Loading...' }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-4", children: ["Server Time: ", data.time] }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "default", className: "mt-4", children: "shadcn/ui Button" })] }));
}
//# sourceMappingURL=page.js.map
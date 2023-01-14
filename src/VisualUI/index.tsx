import { useEffect, useState, useRef } from 'react';
import ReactFlow, { ReactFlowProvider, Background, Controls, useReactFlow } from 'reactflow';
import { ChakraProvider } from '@chakra-ui/react';

import "reactflow/dist/style.css";

import './VisualUI.css';

import HeroNode from './HeroNode';
import ColorPickerNode from './ColorPickerNode';
import SliderNode from './SliderNode';
import SwitcherNode from './SwitcherNode';
import SwoopyNode from './SwoopyNode';
import CountNode from './CountNode';

const nodeTypes = {
    hero: HeroNode,
    colorpicker: ColorPickerNode,
    slider: SliderNode,
    switcher: SwitcherNode,
    swoopy: SwoopyNode,
    count: CountNode,
};

const nodeStyle = {};
const isLargeFlow = typeof window !== 'undefined' && window.innerWidth > 1250;


const defaultNodes: any = [];

const defaultEdges = [
    {
        id: 'color->hero',
        source: 'color',
        target: 'hero',
        targetHandle: 'color',
        style: {
            stroke: '#A3ADB8',
            strokeWidth: 1.5,
        },
        animated: true,
    },
    {
        id: 'zoom->hero',
        source: 'zoom',
        target: 'hero',
        targetHandle: 'zoom',
        style: {
            stroke: '#A3ADB8',
            strokeWidth: 1.5,
        },
        animated: true,
    },
    {
        id: 'shape->hero',
        source: 'shape',
        target: 'hero',
        targetHandle: 'shape',
        style: {
            stroke: '#A3ADB8',
            strokeWidth: 1.5,
        },
        animated: true,
    },
    {
        id: 'number->hero',
        source: 'number',
        target: 'hero',
        targetHandle: 'number',
        style: {
            stroke: '#A3ADB8',
            strokeWidth: 1.5,
        },
        animated: true,
    },
];

function FlowViz() {
    const { setNodes } = useReactFlow();
    const reactFlowRef: any = useRef(null);
    const [color, setColor] = useState('#4dd2ff');
    const [zoom, setZoom] = useState(12);
    const [shape, setShape] = useState('sphere');
    const [count, setCount] = useState(50);


    useEffect(() => {

        setNodes([
            {
                id: 'hero',
                type: 'hero',
                position: { x: 800, y: 180 },
                style: { width: isLargeFlow ? 300 : 160, ...nodeStyle },
                data: { color, zoom, shape, count, label: 'Output' },
            },
            {
                id: 'color',
                type: 'colorpicker',
                data: { color, onChange: setColor, label: 'Shape Color' },
                style: { ...nodeStyle, width: 200 },
                position: { x: 300, y: 200 },
            },
            {
                id: 'zoom',
                type: 'slider',
                data: { value: zoom, min: 0, max: 40, onChange: setZoom, label: 'Zoom Level' },
                style: { ...nodeStyle, width: 200 },
                position: { x: 300, y: 300 },
            },
            {
                id: 'shape',
                type: 'switcher',
                data: {
                    value: shape,
                    options: ['sphere', 'cube', 'pyramid'],
                    onChange: setShape,
                    label: 'Shape Type',
                },
                style: { ...nodeStyle, width: 200 },
                position: { x: 300, y: 100 },
            },
            {
                id: 'number',
                type: 'count',
                data: {
                    value: count,
                    onChange: setCount,
                    label: 'Shape Count',
                },
                style: { ...nodeStyle, width: 200 },
                position: { x: 300, y: 400 },
            },
        ]);
    }, []);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((n) => {
                if (n.id === 'color') {
                    n.data = { ...n.data, value: color };
                }
                if (n.id === 'hero') {
                    n.data = { ...n.data, color };
                }
                return n;
            })
        );
    }, [color]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((n) => {
                if (n.id === 'zoom') {
                    n.data = { ...n.data, value: zoom };
                }
                if (n.id === 'hero') {
                    n.data = { ...n.data, zoom };
                }
                return n;
            })
        );
    }, [zoom]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((n) => {
                if (n.id === 'shape') {
                    n.data = { ...n.data, value: shape };
                }
                if (n.id === 'hero') {
                    n.data = { ...n.data, shape };
                }
                return n;
            })
        );
    }, [shape]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((n) => {
                if (n.id === 'number') {
                    n.data = { ...n.data, value: count };
                }
                if (n.id === 'hero') {
                    n.data = { ...n.data, count };
                }
                return n;
            })
        );
    }, [count]);

    return (
        <ChakraProvider>
            <ReactFlow
                preventScrolling={false}
                zoomOnScroll={false}
                nodeTypes={nodeTypes}
                defaultNodes={defaultNodes}
                defaultEdges={defaultEdges}
                ref={reactFlowRef}
                id="hero"
            >
                <Background />
                <Controls showInteractive={false} />
            </ReactFlow>
        </ChakraProvider>
    );
}

export default () => {
    return (
        <ReactFlowProvider>
            <FlowViz />
        </ReactFlowProvider>
    );
}
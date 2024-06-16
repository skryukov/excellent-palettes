import React, { useState, useRef } from "react";
import { HexColorPicker } from "react-colorful";

import { useOutsideClickHandler } from "~/hooks/useOutsideClickHandler";

const ColorPicker = ({ colors, onChange }) => {
  const [colorList, setColorList] = useState(colors);
  const [editingIndex, setEditingIndex] = useState(null);
  const pickerRef = useRef();
  const colorListRef = useRef();

  useOutsideClickHandler([pickerRef, colorListRef], () =>
    setEditingIndex(null),
  );

  const handleColorChange = (color) => {
    const newColorList = [...colorList];
    newColorList[editingIndex] = color.toUpperCase();
    setColorList(newColorList);
    onChange(newColorList);
  };

  return (
    <div className="flex flex-wrap gap-4 w-full">
      <ColorList
        colorListRef={colorListRef}
        colorList={colorList}
        onColorRowClick={setEditingIndex}
      />

      {editingIndex !== null && (
        <div ref={pickerRef}>
          <HexColorPicker
            color={colorList[editingIndex]}
            onChange={handleColorChange}
          />
        </div>
      )}
    </div>
  );
};

const ColorList = ({ colorList, onColorRowClick, colorListRef }) => (
  <div
    ref={colorListRef}
    className="w-48 mb-5 block rounded-xl overflow-hidden relative shadow-xl border-4 border-dotted border-pink-600 bg-yellow-100"
  >
    {colorList.map((color, index) => (
      <div
        key={index}
        className={`w-48 block relative cursor-pointer ${index === 0 ? "h-16" : "h-8"}`}
        style={{ backgroundColor: color }}
        onClick={() => onColorRowClick(index)}
      >
        <div className="text-xs absolute bottom-0 left-0 bg-gray-700/75 text-white p-1 rounded-tr">
          {color}
        </div>
      </div>
    ))}
  </div>
);

export default ColorPicker;

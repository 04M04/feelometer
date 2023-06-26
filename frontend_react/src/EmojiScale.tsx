import React from "react";

export interface feelingCount {
    count: number
  }
const Emojis = ["☠️", "🤬", "😡", "😠", "😭", "😢", "😟", "🙁", "😐", "🙂", "😊", "😄", "😁", "😋",]

function ScaleElements(props: feelingCount) {
    return (
        
            Emojis.map((emoji, index) => {
                if (index <= props.count && index == props.count) {
                    return (
                        <div className="w-60 h-4 rounded-md bg-gray-300 transition-all duration-200 cursor-pointer flex flex-row justify-center bg-blue-400">
                            <p className="text-6xl mt-5 select-none pointer-events-none">{emoji}</p>
                        </div>
                    );
                }
                else if (index <= props.count) {
                    return (
                        <div className="w-60 h-4 rounded-md bg-gray-300 transition-all duration-200 cursor-pointer flex flex-row justify-center bg-blue-400"></div>
                    );
                }
                else {
                    return (
                        <div className="w-60 h-4 rounded-md bg-gray-300 transition-all duration-200 cursor-pointer flex flex-row justify-center"></div>
                    );
                }
            })
    );
}

export default function EmojiScale(props: feelingCount) {
    return (
        <div className="w-screen">
            <div className="rating ml-20 mr-20 flex flex-row justify-center gap-3 relative">
                <ScaleElements count={props.count}/>
            </div>
        </div>
    );
}

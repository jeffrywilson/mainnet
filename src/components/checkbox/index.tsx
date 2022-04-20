import { useState } from "react";

export default function CheckBox(props: { id: string }) {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    // e: React.ChangeEvent<HTMLInputElement>
    setChecked(!checked)
  }
  return (
    <>
      <div className="checkbox-container">
        <input type="checkbox" checked={checked} onChange={handleChange} id={props.id} />
        <div className="checkmark"></div>
      </div>
      <style jsx>{`
        td {
          @apply 
            border-collapse border border-[#CDAF8F]
        }
        /* The checkbox-container */
        .checkbox-container {
          @apply 
            flex select-none w-full h-full justify-center items-center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }

        /* Hide the browser's default checkbox */
        .checkbox-container input {
          @apply 
            opacity-0 cursor-pointer h-0 w-0;
        }

        /* Create a custom checkbox */
        .checkmark {
          @apply 
            relative bg-[#eee] m-auto
            w-[12px] h-[12px]
            tablet1:w-[20px] tablet1:h-[20px]
        }

        /* On mouse-over, add a grey background color */
        .checkbox-container:hover input ~ .checkmark {
          @apply 
            bg-[#ccc];
        }

        /* When the checkbox is checked, add a blue background */
        .checkbox-container input:checked ~ .checkmark {
          @apply 
            bg-[#FFFFFF];
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        /* Show the checkmark when checked */
        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the checkmark/indicator */
        .checkbox-container .checkmark:after {
          @apply 
            left-[5px] top-[2px] w-[3px] h-[7px]
            tablet1:left-[7px] tablet1:w-[7px] tablet1:h-[14px] border-[#CA9960];
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
      `}</style>
    </>
  )
}
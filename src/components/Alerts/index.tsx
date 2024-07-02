import { Alert } from "@material-tailwind/react";
 
interface iAlertCustoms {
  text?: string
}

function Icon() {
  return (
    <div className="flex items-center">
      <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
          >
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    </div>
  );
}
 

export function AlertCustomStyles(props: iAlertCustoms) {
  const animateConfig = {
    mount: {
      opacity: [0, 1], 
      translateX: [100, 0], 
      transition: { duration: 0.5 }, 
    },
    unmount: {
      opacity: [1, 0],
      translateX: [0, -100], 
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="fixed top-0 right-0 mt-4 mr-4">
      <Alert
        icon={<Icon />}
        className="rounded-none border-l-4 border-[#c92e2e] bg-[#c92e2e]/10 font-medium text-[#c92e2e]"
        animate={animateConfig}
        >
        <p className="ml-2">{props.text}</p>
      </Alert>
    </div>
  );
}
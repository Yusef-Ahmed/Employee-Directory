import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BadgeCheck, CircleAlert, Info } from "lucide-react";

function Notification({
  status,
  message,
}: {
  status: number;
  message: string;
}) {
  useEffect(() => {
    toast[status == 200 ? "success" : "error"](message);
  }, [status, message]);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        closeOnClick
        theme="dark"
        icon={({ type }) => {
          switch (type) {
            case "success":
              return <BadgeCheck className="stroke-green-500" />;
            case "error":
              return <CircleAlert className="stroke-red-500" />;
            default:
              return <Info className="stroke-indigo-400" />;
          }
        }}
      />
    </div>
  );
}

export default Notification;

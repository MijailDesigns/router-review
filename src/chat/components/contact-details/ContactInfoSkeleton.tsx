import { Button } from "@/components/ui/button";

const ContactSkeleton = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-gray-300"></div>
        <div className="h-4 w-24 rounded-md bg-gray-300 mb-2"></div>
        <div className="h-4 w-16 rounded-md bg-gray-300 mb-4"></div>
        <div className="flex items-center mt-1">
          <div className="h-2 w-2 rounded-full bg-gray-300 mr-1"></div>
          <div className="h-4 w-8 rounded-md bg-gray-300"></div>
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <div className="h-4 w-24 rounded-md bg-gray-300 mb-2"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-4 w-24 rounded-md bg-gray-300 mb-2"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
              <div className="h-4 w-16 rounded-md bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Button variant="outline" size="sm" className="w-full">
          <div className="h-4 w-16 rounded-md bg-gray-300"></div>
        </Button>
      </div>
    </div>
  );
};

export default ContactSkeleton;

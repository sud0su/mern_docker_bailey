import { useDefaultLoading } from "../../stores/layoutStore";

function Loading() {
  const getLoading = useDefaultLoading((state) => state.loading);

  return (
    getLoading && (
      <div class="fixed inset-0 z-[200] flex items-center justify-center text-white bg-black bg-opacity-50">
        Loading.....
      </div>
    )
  );
}

export default Loading;

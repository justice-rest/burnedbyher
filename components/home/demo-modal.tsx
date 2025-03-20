import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import Link from "next/link";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Precedent Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Precedent</h3>
          <p className="text-sm text-gray-500">
            Thank You!
            <br />
            Click the button below to be redirected to the podium, from where you
            can scroll down and find our app, BurnedByHer!
            <br />
            Click on it and other projects you&apos;d want to support. Once done, you
            can click on vote and you&apos;d have our great appreciation :D
          </p>
          <br />
          <Link href="https://podium.hackclub.com/events/recs3WKxylhLs1xow/rank">
          <button className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black">
                Vote for us!
          </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}

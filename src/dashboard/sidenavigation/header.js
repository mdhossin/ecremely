import { useToggle } from '../provider/context';

export default function SidenavHeader() {
  const { toggle } = useToggle();
  return (
    
    <div className="bg-black flex h-20 items-center justify-center mb-6 sticky top-0 z-10" onClick={toggle}>
      <img src="/images/2.png" width={50} height={50} />
      
    </div>
  );
}

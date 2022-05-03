import { useStores } from "../stores/index";

// ----------------------------------------------------------------------------
// React Component for ThreeJS Model
// ----------------------------------------------------------------------------
export function Sliders() {
    const {data} = useStores();

    // RETURN COMPONENT
    return (
      <div>
        <p>Left menu</p>
        <p>{data}</p>
      </div>
    );
};
import { createRoot } from 'react-dom/client';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    window.innerWidth < 760 ? <Mobile /> : <Desktop />
)
import { Nav } from '../../components/layouts/Nav';
import '../../main.css';
import { SecondaryNav } from './Nav';

export const NewMetric = () => {
    document.title = 'New Metric';
    return (
        <div className="main">
            <Nav />
            <SecondaryNav />
        </div>
    );
};

import { Outlet } from '@umijs/max';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const Layout: React.FC = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;

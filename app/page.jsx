import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import InfoBoxes from '@/components/InfoBoxes';
// import connectDB from '@/config/database';

const HomePage = () => {
    // console.log(process.env.MONGODB_URI);
    // await connectDB();

    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
};

export default HomePage;

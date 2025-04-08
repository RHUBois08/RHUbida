import Head from 'next/head';
import Slider from '../components/Slider';
import '../styles/styles.css';

export default function Home() {
    const handleDownload = () => {
        alert('Your download will start shortly!');
        window.location.href = '/apk/eBIDAmo.apk';
    };

    return (
        <>
            <Head>
                <title>e-BIDA mo! Application Download</title>
                <meta name="description" content="Download the e-BIDA mo! application and explore its features." />
            </Head>
            <div className="container">
                <Slider />
                <div className="actionPart">
                    <button id="downloadBtn" className="downloadBtn" onClick={handleDownload}>
                        I-DOWNLOAD NA!
                        <img src="/assets/new-download-icon.png" className="dlBtn" alt="Download Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

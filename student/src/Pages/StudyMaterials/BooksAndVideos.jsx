import HeaderComponent from "../../components/HeaderComponent";
import SmallBox from "../../components/SmallBox";
import { Link } from 'react-router-dom';
import View from "../../components/View";
import book from "../../assets/book.png";
import video from "../../assets/video.png";


function BooksAndVideos() {
    return (
        <>
            <HeaderComponent page="Add study materials" title="books and videos" />
            <h2 style={{ padding: '3rem 0 0 3rem' }}>Class-1st:</h2>
            <View style={{ height: '70vh', display: 'grid', justifyItems: 'center', alignItems: 'center' }}>
                <View style={{ width: '50%', margin: '0 auto' }}>
                    <Link to='/mentorMaterialList/book' style={{ textDecoration: 'none' }}>
                        <SmallBox image={book} />
                        <h4 style={{ textAlign: 'center', paddingTop: '1rem', fontSize: '1rem' }}>Book</h4>
                    </Link>
                </View>
                <View style={{ width: '50%', margin: '0 auto' }}>
                    <Link to='/mentorMaterialList/video' style={{ textDecoration: 'none' }}>
                        <SmallBox image={video} href='VideosPdf' />
                        <h4 style={{ textAlign: 'center', paddingTop: '1rem', fontSize: '1rem' }}>Video</h4>
                    </Link>
                </View>
            </View>
        </>
    )
}

export default BooksAndVideos
import { GlobalStyle, Container } from 'style/Global.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './Api/Api';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState('');

  useEffect(() => {
    if (query !== '') {
      setIsLoading(true);

      const fetchImages = async () => {
        const { total, hits: images } = await getImages(query, pageNum);
        setImages(prevImages => [...prevImages, ...images]);
        setTotal(total);
        setIsLoading(false);
      };

      fetchImages();
    }
  }, [pageNum, query]);

  useEffect(() => {
    if (total === 0) {
      toast('No images', {
        icon: '😞',
      });
    }
  }, [total]);

  const handleSubmit = ({ queryValue }) => {
    const newQuery = queryValue.toLowerCase().split(' ').join('+');
    if (newQuery === query) {
      return toast.success('The images are already on the screen!!');
    } else if (newQuery === '') {
      return toast('No, no, enter what you are looking for!!!', {
        icon: '👈',
      });
    }

    setQuery(newQuery);
    setPageNum(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />

      {images.length > 0 && <ImageGallery images={images} />}

      {images.length > 0 && !isLoading && images.length !== total && (
        <Button onLoadMore={onLoadMore} />
      )}
      {isLoading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </Container>
  );
};

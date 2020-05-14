import * as React from 'react';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Album from '../Album/Album';
import { styles } from './homeStyles';
import { IState, IProps } from './Home.d';

class Home extends React.Component<IProps, IState> {
    state: IState = {
        albums: []
    };

    localQuery = 'john mayer';

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = () => {
        const query = encodeURIComponent(this.localQuery);
        const options = {
            method: 'POST',
            body: JSON.stringify({
                query
            })
        };

        if (query) {
            fetch(`/search/:${query}`, options)
                .then(response => response.json())
                .then(data => {
                    const albumArray = data ? data.data.results : [];
                    this.setState({ albums: albumArray });
                })
                .catch(error => console.error(error));
        }
    };

    handleSearchQueryChange = (e: any) => {
        const value = e.target && e.target.value ? e.target.value : '';
        this.localQuery = value;
    };

    handleClick = (e: any) => {
        e.preventDefault();
        this.handleSearch();
    };

    handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.handleSearch();
        }
    };

    renderAlbum = (album: any) => {
        const { classes } = this.props;
        return (
            <div className={ classes.albumContainer } key={ album.collectionId }>
                <Album key={ album.collectionName } album={ album } />
            </div>
        );
    };

    render() {
        const { classes } = this.props;
        const { albums } = this.state;

        const iconProps = {
            className: classes.searchIcon,
            onClick: this.handleClick
        };

        const searchBoxProps = {
            type: 'text',
            className: classes.searchInput,
            onChange: this.handleSearchQueryChange,
            onKeyPress: this.handleKeyPress,
            value: this.localQuery
        };

        const topAlbumsSorted = albums ? albums.sort((album1, album2) => (album1.collectionName > album2.collectionName) ? 1 : -1).slice(0, 30) : null;

        const filteredAlbums = topAlbumsSorted ? topAlbumsSorted.map((album: any) => {
            return this.renderAlbum(album);
        }) : null;

        return (
            <div>
                <div className={ classes.directions }>
                    <span className={ classes.directionText }>Find albums:</span>
                </div>
                <div className={ classes.albumsSearch }>
                    <form id='searchbox' className={ classes.searchContainer }>
                        <label className={ classes.searchLabel }>
                            <SearchIcon { ...iconProps } aria-hidden='true' />
                            <input { ...searchBoxProps } />
                        </label>
                    </form>
                </div>
                <div className={ classes.albums }>
                    <div>
                        { filteredAlbums }
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Home);
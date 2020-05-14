export interface IState {
    searchQuery: string;
    albums: any[];
}

export interface IAlbumProps {
    collectionViewUrl: string;
    artworkUrl200: string;
    artistName: string;
    trackName: string;
}

export interface IProps {
    album: IAlbumProps;
    classes: any;
}
export interface IAlbumProps {
    collectionViewUrl: string;
    artworkUrl100: string;
    artworkUrl600: string;
    artistName: string;
    trackName: string;
    collectionName: string;
}

export interface IProps {
    album: IAlbumProps;
    classes: any;
}
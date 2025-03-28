import {decryptAes, encryptAes} from "./crypto/aes.ts";
import {md5Hash} from "./crypto/md5.ts";
import {downloadFileFromStream} from "./files/files.ts";
import {User} from "./types.ts";

type IdToken = string;

declare global {
    interface Window {
        // crypt
        encryptAes: typeof encryptAes;
        decryptAes: typeof decryptAes;
        md5Hash: typeof md5Hash;

        // files
        downloadFileFromStream: typeof downloadFileFromStream;
        
        // ui
        getWidth: () => number;
        hasPreferenceForDarkTheme: () => boolean;
        
        // firebase
        isSignedIn: () => boolean;
        getAuthToken: () => Promise<IdToken>;
        signInAnonymously: () => Promise<IdToken>;
        getSignedInUser: () => User | null;
        signOut: () => Promise<void>;
    }
}
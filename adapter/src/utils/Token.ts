export default class Token {
    
    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hdGV1cyBDYWxsZWdhcmkiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTE2MjM5MDIyfQ.m4fUqNAzACv3Jas-wc7nXInQ1pW2CP7Z_jW8A4Bj8kg";

    getToken() : string {
        return this.token;
    }
}
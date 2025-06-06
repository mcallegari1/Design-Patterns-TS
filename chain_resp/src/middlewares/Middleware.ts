export default abstract class Middleware {

    public next: Middleware|null = null;

    public linkWith(next: Middleware) : Middleware {

        this.next = next;

        return next;
    }

    public abstract check(email: string, pass: string) : boolean;

    protected checkNext(email: string, pass: string): boolean {

        if (this.next === null) {
            return true;
        }

        return this.next.check(email, pass);
    }     
}
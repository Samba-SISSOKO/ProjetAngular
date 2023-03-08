import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetailJoueur } from "../models/DetailJoueur";

@Injectable({
    providedIn: 'root'
})

export class DetailService {

    constructor(private http: HttpClient) { }


    myFoot2: DetailJoueur[] = [
        {
            id: 1,
            nom: "Lionel Messi",
            image: "https://media.gettyimages.com/id/1316985020/fr/photo/lionel-messi-of-fc-barcelona-looks-on-during-the-la-liga-santander-match-between-fc-barcelona.jpg?s=612x612&w=gi&k=20&c=IExzRZDaa5bSOEzdv3oD4WwS10lpctgARKSnEfNWZTs=",
            clubActuel: "Paris Saint-Germain",
            clubPrecedent: "Barcelona",
            numero: 30,
            salaire: 82000000
        },

        {
            id: 2,
            nom: "Cristiano Ronaldo",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRIYGBgYGBgYGBgYGBgYGBgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQrJSQ0NTQ0NDU0NDQ1NjQ0NDExNDQ0NDQ0NDQ0MTQ0PTQ0NDQ0MTE0NDQxNDQ0NDQ0NDQ/NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA9EAACAQIEAwUFBgQFBQAAAAABAgADEQQSITEFQVEGEyJhcQcygZGhFEKxwdHwUmJyoiMzkrLhFVOCwvH/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QALREAAgIBBAEEAgECBwAAAAAAAAECEQMEEiExQQVRYXETkSIy4RQzQoGhsdH/2gAMAwEAAhEDEQA/APIBVMZqzdYssRWQglrGS+0mCIkSJCBmrGMhvAwlFrGQhepUtIq1GFovJVmij8UZjraREJUMFGEHMa0mlNm2Un0BMgZCCjyMa8gbJGQMe8aQAooopCCAmhhsLeUqe83cDaBhSsiMFptKWJw1p0YtaZeOAgTGcTAYRoSuNYMCMISRbw4w8tYOhNEYbTaLY6iYD07QRmtiqNpmOIUK1RCKKKEAooopCCiiikIWLRjCQVSQgxgzHjGQg0kkjCIshA9N5JqhOkGFh0soGl2O3QA/8XhohBKXNh5WvY+pjMV5KOXU/X0g39d9fWN6QELlPFlbZQvLRenn5wxxAZgWpoSdzvptrrrbrMwGx6W84g5tYdb/ALMgbNN8JTLWyuM3ulbW25A8r+cyq1IqSpGo/dx5TU4XwfFYhglGk7HkbEKNtcx0Eq8XoulVqbqyshysrXupG4184CMoxRRQgFFFFIQcGaWErzMhKTWgYU6OhXFaSniqt5WSrIVXgody4KtU6x6K3MZhCUYRF2bWCWaDsAJk0K1oWpiYlF9qgOMeZNSW8RVvKrIY6KZdgoo5WMIRRSWWOolynSvBYyiUssU0vs0UlkopXkHMjeNeEQeNFEZAiEKsFCoYUALDYggNa3TbmQLSujWIPmJbx1FgzEkE3G3QjfykYSuRe5tb8BrI2+UQWWKFO52gIAWmd7S1hsITrbT0m1hOF2FyLy/Twi3Glvrz3iOSQVGzruwfGGRO5awFrra2Xa1tdtpzntawRZ0xQS2a9NyOq60ySNyVuL/yjym9wTCDc7jbylD2h8ZJwzURbKSgYZbkkNcNm+7qLedokZXIulGo8nk8UUUuKBRRRSEFJKJESxRWQhJUMMtAmGpJL1GjFbHUTMbCys62nRPhtJj41LSJgcaKq1ojWMAY6xqBbLNFLmaNPB6SvgVnQ4amLRZOhoxswsTg7TMdLGdVjUFpz2KXWBMZxRXSXaDykJNHkGXBp94Ipn98YoaBZUjgRASxRS8ZlKA5ZErNRaEFVoxbG2mfaEUwzUZBkjoVojeX8YSfEOYH11/OZwmjh3zoUO66jzXmPh+EDYUm0Aorc2nRcKwoJAy6/oP2ZlcPw9z+9p13ClC28B23ttK5yoaEbZq0sCyISMme10VwSthuWA1JsDb4R0wgKoxplCVBYC+UnZspOtrybVir57EgAc9NOUsYHGUmAWiPBd3ILXAdveAG63IJ1mTc2bnCKikjT4YqKPy5zSqcIwz06ismYVlyONL2F2BBOzA2I8wJi0sRbcamGo1He6qVBIsCdrggi9uUaEqZVKNo8e7TcBqYOsaTkMp8VNx7tRCSAw6HQgjkR6E4s6nttxOu9U0K+S9FmC5dQAwU2UnWxAU+vSctNi6MjSTpCiiihAIQ9AwAlqgshDRozRoNJ9nuFCqxZyVppbORuxOyKev75y5icKj4gphlISymzEtkNhmux1tfr1tKm+S+MJbbKz1BaY2OF7zoeN4FKJQLWD5gb2GUqRbQ6m4139ZzuKMaKBJ1wzKYRgYV1gpYikv4R5uYavOYpPaX6WJiSVjRlRqYyvpMPENrDVsReUne5gUR9yJqJIpHpwwWBui+MU0VssUPliksGxFEGXsMRKENRfWWMyI2qcFVSFw7aSVU3EQuRQcSu6w9RrSs73jJFcmBG8tUWIII5SsBDIYsi7DXk63AcOD5HT741HmN/qCJ2WAwIAswt5yfZ7hHdYaiWFnyZvMFyz2+Aa3wmkBpM05eC2MOW0V2w4VbaEHraAwdKmpICKDqdBa5PPSXXTS0zcWxTx+RlRbXBLEsM3KWcNrop8W1vPlOTqcYDNppNXC4tLhs3PXW1xprDHsElwec9rc/2yuHFmDkEabKAFOhO4AO/OY01O0jXxVchsw717G99MxsL+Q0+Ey5vXRz32KIR44EJKOu492ZpJhkxOGd2Qhe8WplzAN7rrlA8NyARrYkanlh8PwrO6IguzsFHqTbXy5/Ceg8NwrVsAFA96gUUfzBfD/coguwPAsq/aHBDkWQH7qHQvbqb29P6pVu4dl/4uVXkPxGmKFJKFEZibIBzdyPeYfMnoBK9dEwdFl3dgM782boOgF/rOlw/DkWvVqO9+7GRb7KcodjfqbqJmVcIA5rYnLdBeml7gX++/InpyFuu1a+TS/jx0c/gOGooNbG5rMLhAxVrHmxGoPQfPpOVxVsxyklbnKTuRfQnztOkxa1sbVsgGUaZmNkXzZv0uZz3EMK1N3RiLoxUlTdSRzU8wZoivf9GTLXj9+5n1ZXMPUgDGRSNJB5GK0hCReQvFFIQsUmllXmeDLCPEaLoToNePA5ooKH3laOm8TCOkdmddmvhm0hncATMpvJvUPWJ5NPCiRrPcwDGOTLWA4dUrNlRb23Y6KvmzcpZdLkoUXOVRVtlMTtOzvYmu1ZTiaTUqalWZXFmcGzZVXexGhPK556TQ7HU8Ngq4q1affsBYGw8BuPEik2JGup16Wnqb9tuHMt3e/8rUnJ+Ayypzi+ma3o9Rjq4N37GZjkza325bCQWiSNB8ofEduOHqPBRZz0FMD5lyJk4j2jVjpSoU0HLOWc/IZQJmlCF25GnHpdTJVGDX3wX+6NtpTxdEOjqRoVI+YljBduA9MjEU1LgixUEKVJ15kqQL23B8o3EHpZTUo1A9PmRupIvlbobXgcFVxdiZMWXG2ska+fH7PGcViMrFWvcdIKpxp7ZV089L/CUsbiM7sw5n8pWmqMF20Yp5pPhMRiAitJKI5UlZNEh1oyFOei8U4HQfBrWpU1pulNagyj31KhirdTY7nW46GK5UXRjwa3YmuDh6aj7gKkeYJv+vxm5hbZ2cjw3KjpqQTcc+U47sHVIpuOWfT1KrcD6fOdrQpMAF5jUjzlEu6NMX/EqqM1CsvN3qWPkXKr/aBM7tHwgO6FqlkW4dRo7E2KjyGja+Q6zZakVREBuoYZj/SM1/ibfOcb28xRSkrBtXqFRqbgKup+loY3ZXJpK30Z/FuKKB3VEBFUnVdj115nznMYppEYjSArveXxjRnlPcVajQMm0hHKhRRR1EIBrRWMt06cL3IitjJGeBJrpDOlpArBYUmRzRRrRSB5JukhlMt1Fg8sgKoGrRM0myS3wfAGvWWkL+IknKLkKoLMR/4gwkVydINwfhDVjcnJTU+JyP7VH3m8uXOdjlC01WlSZKV8qeEnO+xLN95r8p0zYGmtGvhVoIDT7ikj2Jfv6jgEKeSjxaDcKSfemorU2oOtNQzYGsaNBQAS9VlWmlQ30v3zMemnlKZpy88HX0uWGmVqNvy/hrg8/wDstQ1O7ytnvbLlLNfmMo1JFjp5S1iKykZEpBQos5ZAXJBsSxtp+U6LhXd0aNd6VfPiaaOKxVGZjUqMKaBKjaFVYkmwu7AG9gBM6tgqiH7DSRjWcjvW90MLBgincUxqWY7kHkBKXjpHSjrfyTqS69+Plv8A8MIiLLOiThuEajiER3arh6ZqtXBtSci4amo/h0sG3JuRpvy6VDKpwcas6Gn1cM1qKar3/wCGHBMdMQyq6hiEqKUdeTD8j5iB72PnMRNrovnGE47ZK0UcP2cw5YFzUVb65WXMB5XX8Y3EOxqg/wCBilq3OgZHQ2t1sRflb6y21QyzQrS6OeSObk9J003aTX0cJiMMyMUdcrKbEdCJArO94pw9cQATZXAsH6jkG6jz3E4fEUmRirAgqSCDyImmM1I4Oq0ctPKn0+mCRrT0/sDXFbDtTbXLdDf+Ei6j5Ej4Tz/g3CamJqLTpAZmIAJNgCep9AT8J7JQ7IphMOEokmqtnqPbWoQNQB91RrlHzuSTJJWnRRF7Wr6YHhPCaOGpoqZiy3Zme2rnQsvTQAD066w1Ss4YOG8gOvwk8NWzre+o3EhUA5mUbrLq28EKHErMwqAWI0t15zz/ANpFcd/TpgWCpmtyuzEX9bLOwxiNtmuvnqAfjPK+O481qzve4vlU/wAq6A/Hf4y3FyzPmfBVQw1pWptLHeTZt4MlgKqyuZZcwBEQJGSUxrRoAl6nUEIXtM4MZLOYtBTosPUBg2aBvHDSUMpBrRRrxQD8BHqaxBxAGNeNRW5Bmedx7McMQcVic6r3NAqpbbNUNyBzJyU3GnWcFedzwdimFSjpZ279jzLFcqi/QL/uMTJLbGzTo9NLPlUV0uX9G5x7tDVruGCimFbOqpdbOd3Y7s2m/Kc+1W97i9zc3JNydyep1Pzh8Q1jv+7SsKnoZglKUnbPYQw4scVGKSC4fEsjAqSpBBBUkEFTdTcdDrOk4f2ocM/2pWrq9M0Sb5aioSSQrC25Ot9TYa6WnLo636QxaGM5R6Bl0+LMv5JP58/s63C4zDPQrKlJ6ODo929YBg1fEO7ZaSFr2Vcw68uWshh0wuKpVwmE7hqNJqqutRmBC/dqXAFzy+PTXF4Fxg4dnBprVp1VC1KbaBgCSpvyIufnD8T7Ql6Ro0KCYeiWzMqXJdhtnYi52GnkJcskXHn9Ucx6PJDI1BOm007697XlmOBHY6QYexkKlXSZjsOVCLRLUgO9izQifkNTD14/EeCtiqbvTp3aipbMG1ZBqwItqAPMe9M1HnovYN1TBYqq17o5bw2vkREcjXSxsby3ArlRh9TyJaZtq+UeecHZsKyMjBmpvn02JFtNeVha/mZ7bQx9OrRGIQ3VhfzBGhU9CDpPG+OYZadXwf5bjvKfOyN90+am6n0kODdpquFLKhzI3voToTyZf4W8+fytZGUlJqRh1ODHlwQlj8L9/B24AzuV2zXsOQOtvxlw4cuPCdYD2a1KeKavUYZgjIoRuV7nMevT4GelLgqdv8tP9K/pH/DfJynm2/xa5R4p23xP2alYHx1Ayr1Gnib4X+onlU+kPaL2LpYvDlwSlWglRqdj4DpmZWB5G24tb6T51FEnW0uhHajNOW52QEfNJNTIgmMvb4EJZo8gDHzSoIjIGOTGkIKKKKQgo8aTQQBStjxQlootlu0FeNGjSwoJgz0FBr5AAD0AFp56J3WCq5kU9VX521+szahcI7Xo8kpyXweo+zThq9w9ZlDGo+VcwB8NO68/5i/ynVVuDYZ/fwtFv6qSH8RPIOG9r8Xh0FOm6hFvlUoptcljc7nUkzX4b27x9aolGmtBnc5VDI4F7EkkhxoACT6SQywpRBq9DqXkllvjl9+DvKvZXAnfB0R6IF/22nl3behhqWINLDUwoRQKlmYgu2tgGJtZSNv4j0nrHGsbVoYepVCq5Smza3UEqt9d9PKeDYjEF2d2N2dmdj1ZiWb6kwahpRquxvR4Tnkc5SdL58kc0cmDJj3mI9LuE7HpeBfUG0LeCrfI9YyKZsrZ7QqtAub+sirlTHqzNup/BcW+66+U6rsT2pp4d2pYhf8ACqjKxIuoNrXYcwQbGcij8xvLC5H0bQ9ZIycJWhsmKOeDg32d72m7NUGw6fZq4cAlqCKQ5a6KHUEa+Iqh1sL6bsJ5JiqljbYjQ35HoZ3fZjgaPU0rMpAzKiZruRcixDA6ELcaEgmxW14Ttzwpazg93lxIuajC2SorBWp5tdWCkLm3JDX0tbTcZLeziSx5cUv8NG2+zF7Hccq4JajUgpaqFHiBIUIW8VrgX8R3nSUPaNj11bu3XplHy8JE4fBUH91rgKbWI587+k16eFVhobHqJTLJJPhnT02gx5MduPPz2d5jPaAmIwdemUKVGpOgsQRdhl1vqN/OeSV6Fps1aBU3tZhv0ZdifWV8bTmjBNzuzk+p6OOnacVVmDUSU6izVqrKj05rk+Dkoo2jSw6WgCJSMMYoopCCiiikIKFpwUIsDGj2EiitFFLbARo5EaWFA87Ls82agv8AKWX65vznGzreyjf4bDo9/mB+kqzK4nR9MlWoXyi9XE6X2d8GatilqEEJRzMzbAsVKqoPXxE+g85zNfnPVvZtw2omDV8xXvHZwp2y6Kp+IS/oZmwR3S+jteqZ3j07S/1cAPafWqU8MiLVNnqgFObKFckE72BC/SeUPOs9pWJdsblZ8wp00Ww2Ba7HTqbrf4dJybQZ5XL6B6Xi2adfPIhHkRJSk6JFzAM0KwgCsZFMmwGIHTflA0q4bwtoZYriZeLXmN5dBJ8HO1M5Y3uX+69zRBKmx+BlhXv68xKT1lzFDew8NzvmAAb4XvJgkGx35HqJJQGxahNWuv8Ao1MHjmRgysQQQQQbEEbEHkZq/wDUGdi7eJmNyTuTOdR7+vSFp1SpuJW0+jfjyRvc/wC5v46kHXOoIYe91I/MiU6RZT+9uvpFhcaOZtpt1kDU18ha1txoNvkYjNkZRq4mlXph0vbX/jX5iY2PNhbymnhsTluDzViPMgE6euvyPWYeMe81abi2cH1z+Sgl7soPrIFYW0E01qR51waKtcSqwl7ui0X2OVtjxg2ZxEjLzYaR+yybkM8UipGls0IN0k3IV42gEIsYJLFOnI2SEG2Qilruoou5Gj8bKlZLQEu4kSnLEY2KdF2TqWZl6qCPVTb8GnOibfAvDURvOx9G0/OLNXFo0aWezNF/J0OL2Y9Lme4cDoNTw9CmL+GlTU3N9Qig/WeNDD53RLe+6J/rcL+c9u4niu7o1Km2Sm73/oQt+Up06rczp+sTv8cV9ng3GMQ1TEVnY3zVahv5Z2y/C1h8JVkUBtrHJmSTt2dzDHbCMfZDiNEpjEyDsixkCZJjB3hRVJgq40lYpcEdZaqC8EiyyLoyZo7uzNLEkk73JJ6knWGo1dMp1H1HpK7nxH1P4w1GaWrRxIScJcBzddb6ciIenWDb7/QyKj9/rK7rrbY9P0MrlE3wzVyv0Xw1odavP93Gv5zNSvyPz/WGWoJTKBsx6hdpmj3gt6MLehGv4mU8TqYlqg366fSDdpfhVJmTXTU5L6IEQNQwmaDaW2YJRTDYddJaSnKdF7S6lUW0ER8kSUQVelrBd3CsxJuYwMWmOpRZXanpKlRJouJXenCmNKCaKKJrL9CjIpR1l5EkbsSMUiPdCKGtFAWcHOVWvAkQsZhNVHJBTX4c8ySsuYNyIkizGrkemcDTNi8Nf/uoT8Dm/KdTxXj1SpgcejIy1KTd24YaZKjgKFYAAgoQeZswvPPsJj3UB0Yq6ZXRgASNN7EEc+YhsZ2qxlVGpVcSzq2jKUpAGxBGqoDuBz5TLHIoppne1GjnmyQnFqkl2ZFzEdoo52mc7FEEMdpAG15LeQWyJkAIUiQXeEVxIMIJhDuINxCmVziY9dfE39R/GTpCErJ4j6ySLNsXweblGpv7Jo0k1mFj/wDIBzaDFWGg7qDPh25EH10MBkYaZT8pYSrLKNBtGUr8kaCEC7bmQqNDMZWqyJBk2DLwiayvLFGF9CxLFKnLqUoGgRLyEStBmuCs6QLJL1YiUneFlUeGJUkhRipPLSGIa1yiv9njZJZZ4JnkQGgdoooowDmohHimk5RIQyRRSqZqwdnRYH3U/pP/ALSNX8hFFMMv6metxf5S+kISUUURlkQTbxCKKMV+QnKBO8UUiGl4JHaCMUUKK5lGr7xjrHimuPR57J/XL7BVIBoopYjLMJTlynFFAxsZJpXrRRSFzACHpx4pGKizSlpIoogshVdvhKbc48UJT5Gp8pdp7RRRGbIEXkYooENIjFFFGEP/2Q==",
            clubActuel: "Machester United",
            clubPrecedent: "Réal madrid",
            numero: 7,
            salaire: 50000000
        },

        {
            id: 3,
            nom: "Ngolo Kante",
            image: "https://pbs.twimg.com/media/EU8saz1XgAMu0eZ.jpg",
            clubActuel: "Chelsea",
            clubPrecedent: "France",
            numero: 13,
            salaire: 400000000
        },

        {
            id: 4,
            nom: "Kevin Debryne",
            image: "https://cdn.vox-cdn.com/thumbor/QqbJEC52_9gGXix_6w8oiYvqxJM=/0x0:2323x3485/1400x933/filters:focal(792x778:1162x1148):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67565468/1228060220.jpg.0.jpg",
            clubActuel: "Machester City",
            clubPrecedent: "Chelsea",
            numero: 7,
            salaire: 600000000
        },

    ]



    getAllDetailJoueur(): Observable<DetailJoueur[]> {
        return this.http.get<DetailJoueur[]>('http://localhost:3000/details');
    }

    getJoueurById(id: number): Observable<DetailJoueur> {
        /*
        const joueurId = this.myFoot2.find(joueurId => joueurId.id === id);
        if (!joueurId) {
            throw new Error(" Aucun Joueur ne trouver !")
        } else {
            return joueurId;
        }
        */
        return this.http.get<DetailJoueur>(`http://localhost:3000/details/${id}`);

    }
}
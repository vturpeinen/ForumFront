--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5
-- Dumped by pg_dump version 10.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE foorumi; Type: COMMENT; Schema: -; Owner: hemmo
--

COMMENT ON DATABASE foorumi IS 'Keskustelufoorumi';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: hemmo
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    content text NOT NULL,
    ttimestamp timestamp without time zone,
    label character varying(255) NOT NULL,
    ggroup character varying(255),
    userid integer
);


ALTER TABLE public.messages OWNER TO hemmo;

--
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: hemmo
--

CREATE SEQUENCE public.messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.messages_id_seq OWNER TO hemmo;

--
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hemmo
--

ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: hemmo
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255)
);


ALTER TABLE public.users OWNER TO hemmo;

--
-- Name: TABLE users; Type: COMMENT; Schema: public; Owner: hemmo
--

COMMENT ON TABLE public.users IS 'Kayttajat';


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: hemmo
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO hemmo;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hemmo
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: hemmo
--

ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: hemmo
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: hemmo
--

COPY public.messages (id, content, ttimestamp, label, ggroup, userid) FROM stdin;
3	HienoDB	2018-10-22 00:00:00	Toimii	\N	\N
5	testi	\N	koe	\N	\N
6	koe2	2021-02-02 00:00:00	testikoe	\N	\N
7	koe2	\N	testikoe	\N	\N
8	koe3	2021-02-01 00:00:00	testikore	ryhma5	\N
9	Random sisältöä	2018-11-22 00:00:00	KoeForum	Ryhmähau	\N
13	Kirjoita tähänsdfsdfsd	2018-11-22 00:00:00	sdfsdfsdfs	Ryhmähau	\N
14	Vittu Perkele!	2018-11-22 00:00:00		Ryhmähau	\N
15	Kirjoita viesti:	2018-11-22 00:00:00		Ryhmähau	\N
16	Viesti	2018-11-22 00:00:00	Otsikko	Ryhmähau	\N
17	Viesti	2018-11-22 00:00:00	Otsikko	Ryhmähau	\N
18	Tosdgsgimii	2018-10-22 00:00:00	HiesfgsfgnoDB	\N	\N
19	vsdvsdvsdfvs	2018-11-22 00:00:00	werwerwerwer	Ryhmähau	\N
20	Kokeillaan	2018-11-22 00:00:00	Testataaan	Ryhmähau	\N
21	Torstai	2018-11-22 00:00:00	Vitun torstai	Ryhmähau	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: hemmo
--

COPY public.users (id, name, email, username, password) FROM stdin;
1	Pomo	Pomo@yahoo.com	Boss	salasana
2	Apinakuningas	Ape@yahoo.com	King	Paallikko
3	Apinakuningatar	Ape@yahoo.com	King	Paallikko
4	xxx	vvvvvv	user	kkk
5	xxx	vvvvvv	user	kkk
6	xxx	vvvvvv	user	kkk
7	Toni Testaa2	toni@dasdsa	toni2	Password1
8	Torstai	xxx	xxx	xxx
\.


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hemmo
--

SELECT pg_catalog.setval('public.messages_id_seq', 21, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hemmo
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


--
-- Name: messages messages_pk; Type: CONSTRAINT; Schema: public; Owner: hemmo
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pk PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: hemmo
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_id_uindex; Type: INDEX; Schema: public; Owner: hemmo
--

CREATE UNIQUE INDEX users_id_uindex ON public.users USING btree (id);


--
-- Name: messages messages_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: hemmo
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_users_id_fk FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--


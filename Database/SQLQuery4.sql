USE [ELibraryMgmtSystem]
GO

/****** Object:  Table [dbo].[Document_Details]    Script Date: 7/17/2020 10:13:18 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Document_Details](
	[DocId] [int] IDENTITY(1,1) NOT NULL,
	[DocTitle] [varchar](50) NOT NULL,
	[DocAuthors] [varchar](50) NOT NULL,
	[DocDateOfPublished] [date] NOT NULL,
	[DocPrice] [int] NOT NULL,
	[DocDescription] [varchar](200) NOT NULL,
	[DocTypeId] [int] NOT NULL,
	[DiscId] [int] NOT NULL,
 CONSTRAINT [PK_Document_Details] PRIMARY KEY CLUSTERED 
(
	[DocId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Document_Details]  WITH CHECK ADD  CONSTRAINT [FK_Document_Details_Document_Details] FOREIGN KEY([DiscId])
REFERENCES [dbo].[Disciplines] ([DiscId])
GO

ALTER TABLE [dbo].[Document_Details] CHECK CONSTRAINT [FK_Document_Details_Document_Details]
GO

ALTER TABLE [dbo].[Document_Details]  WITH CHECK ADD  CONSTRAINT [FK_Document_Details_Document_Types] FOREIGN KEY([DocTypeId])
REFERENCES [dbo].[Document_Types] ([DocTypeId])
GO

ALTER TABLE [dbo].[Document_Details] CHECK CONSTRAINT [FK_Document_Details_Document_Types]
GO



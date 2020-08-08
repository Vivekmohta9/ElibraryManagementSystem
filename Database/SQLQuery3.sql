USE [ELibraryMgmtSystem]
GO

/****** Object:  Table [dbo].[Document_Types]    Script Date: 7/17/2020 10:13:05 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Document_Types](
	[DocTypeId] [int] IDENTITY(1,1) NOT NULL,
	[DocTypeName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Document_Types] PRIMARY KEY CLUSTERED 
(
	[DocTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


